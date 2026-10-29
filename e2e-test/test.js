const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function runTest() {
    const options = new chrome.Options();
    // options.addArguments('--headless'); // Quita el comentario si quieres ejecutarlo sin ventana

    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        console.log('1. Navegando al Frontend Angular...');
        await driver.get('http://localhost:4200');

        console.log('2. Esperando que cargue el título...');
        const titleElement = await driver.wait(
            until.elementLocated(By.id('app-title')),
            5000
        );
        const titleText = await titleElement.getText();
        console.log(`-> Título detectado: "${titleText}"`);

        console.log('3. Agregando una tarea mediante automatización...');
        const input = await driver.findElement(By.id('task-input'));
        const button = await driver.findElement(By.id('add-btn'));

        await input.sendKeys('Tarea Automatizada con Selenium');
        await button.click();

        console.log('4. Verificando que la tarea aparezca en la lista...');
        await driver.wait(async () => {
            const items = await driver.findElements(By.className('task-item'));
            return items.length >= 3;
        }, 5000);

        console.log('✔ PRUEBA E2E EXITOSA: El flujo entre Selenium, Angular y Spring Boot funciona correctamente.');
    } catch (error) {
        console.error('❌ Error durante la prueba:', error);
    } finally {
        await driver.quit();
    }
})();