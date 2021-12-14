const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

function contar(arreglo) {
  let uno = 0;
  let dos = 0;
  let tres = 0;
  let cuatro = 0;
  let cinco = 0;
  let seis = 0;
  let siete = 0;
  arreglo.forEach((e) => {
    /*
    if (e.monto < 10000) { uno += 1; }
    if (e.monto >= 10000 && e.monto <= 49999) { dos += 1; }
    if (e.monto >= 50000 && e.monto <= 99999) { tres += 1; }
    if (e.monto >= 100000 && e.monto <= 499999) { cuatro += 1; }
    if (e.monto >= 500000 && e.monto <= 999999) { cinco += 1; }
    if (e.monto >= 1000000 && e.monto <= 9999999) { seis += 1; }
    if (e.monto > 9999999) { siete += 1; }
    */
    if (e.monto < 30000000) { uno += 1; }
    if (e.monto >= 30000000 && e.monto <= 39999999) { dos += 1; }
    if (e.monto >= 40000000 && e.monto <= 49999999) { tres += 1; }
    if (e.monto >= 50000000 && e.monto <= 59999999) { cuatro += 1; }
    if (e.monto >= 60000000 && e.monto <= 69999999) { cinco += 1; }
    if (e.monto >= 70000000 && e.monto <= 79999999) { seis += 1; }
    if (e.monto > 79999999) { siete += 1; }
  });
  // eslint-disable-next-line prefer-const
  let arreglograf = [uno, dos, tres, cuatro, cinco, seis, siete];
  return arreglograf;
}
function contarenvios(arreglo) {
  let envios = 0;
  let reversas = 0;
  arreglo.forEach((e) => {
    /*
    if (e.monto < 10000) { uno += 1; }
    if (e.monto >= 10000 && e.monto <= 49999) { dos += 1; }
    if (e.monto >= 50000 && e.monto <= 99999) { tres += 1; }
    if (e.monto >= 100000 && e.monto <= 499999) { cuatro += 1; }
    if (e.monto >= 500000 && e.monto <= 999999) { cinco += 1; }
    if (e.monto >= 1000000 && e.monto <= 9999999) { seis += 1; }
    if (e.monto > 9999999) { siete += 1; }
    */
    // console.log(e.tipooperacion);
    // eslint-disable-next-line eqeqeq
    if (e.tipooperacion == 2200) { envios += 1; }
    // eslint-disable-next-line eqeqeq
    if (e.tipooperacion == 2400) { reversas += 1; }
  });
  // eslint-disable-next-line prefer-const
  return [envios, reversas];
}
const router = new KoaRouter();
router.get('/', async (ctx) => {
  const listaTrans1 = await ctx.orm.transaction3.findAll();
  const listaTrans = listaTrans1.reverse();
  const totaltrans1 = await ctx.orm.transaction3.findAndCountAll();
  const totaltrans = totaltrans1.count;
  const arregloenviosreversas = contarenvios(listaTrans1);
  const envios = arregloenviosreversas[0];
  const reversas = arregloenviosreversas[1];
  // const cuenta1 = contar(listaTrans1);
  // console.log(totaltrans);
  // console.log(listaTrans);
  // console.log(totaltrans.lenght);
  const datahisto = contar(listaTrans1);
  console.log(listaTrans);
  console.log(datahisto);
  await ctx.render('index', {
    listaTrans,
    datahisto,
    appVersion: pkg.version,
    totaltrans,
    envios,
    reversas,

  });
});

module.exports = router;
