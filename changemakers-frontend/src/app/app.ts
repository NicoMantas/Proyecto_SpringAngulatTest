import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule], // Solo necesitamos FormsModule para el input
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  // Inyección moderna
  private http = inject(HttpClient);

  // Estado usando Signals (Reactividad moderna)
  tasks = signal<any[]>([]);
  newTaskTitle = signal('');

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.http.get<any[]>('http://localhost:8080/api/tasks')
      .subscribe(data => this.tasks.set(data)); // Usamos .set() en lugar de "="
  }

  createTask() {
    const title = this.newTaskTitle().trim();
    if (!title) return;

    this.http.post('http://localhost:8080/api/tasks', {
      title: title,
      status: 'TODO'
    }).subscribe(() => {
      this.newTaskTitle.set(''); // Limpiamos el input
      this.loadTasks(); // Recargamos la lista
    });
  }
}