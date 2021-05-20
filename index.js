/* const { webkit} = require('playwright');
//chromium.launch({ headless: false, slowMo: 50 });

(async () => {
    (async () => {
        const browser = await webkit.launch();
        });
  const page = await context.newPage();
  await page.goto('https://web.gencat.cat/ca/inici/');
  await page.click('text="agenda cultural"');
  await page.waitForRequest(/.*preview\/pwa/);
  await page.screenshot({ path: 'https://web.gencat.cat/ca/inici/' });
  await browser.close();
})();
 */
/*
const {chromium} = require('node_modules/playwright');


(async () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://web.gencat.cat/ca/inici/');
    await page.screenshot({ path: `https://web.gencat.cat/ca/inici/` });
    await browser.close();
  }
})();
*/
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
