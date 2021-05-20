const playwright = require('playwright');

(async () => {
    for (const browserType of ['chromium']) {
        const browser = await playwright[browserType].launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://web.gencat.cat/ca/inici/');
        await page.click('#hTContainer > div.fpca_capcalera_new > div.NG-header__container > div.NG-main > div.NG-container > div.NG-row-flex > div.NG-col > a.js-search-menu');
        await page.fill('#autoCompleteCapcalera', 'Agencias Culturales');
        await page.screenshot({ path: `Foto_De_Mostracion_De_Introduccion_De_Palabra_${browserType}.png` });
        await page.click('#fpca_capcalera_cercador > div.NG-inputSearch > button.NG-inputSearch__button');
        await page.screenshot({ path: `Foto_De_Resultado_De_La_Busqueda_${browserType}.png` });
        
        await browser.close();
    }
})();
