const KoaRouter = require('koa-router');

const router = new KoaRouter();

function desencriptado(data) {
  // eslint-disable-next-line no-buffer-constructor
  const buff = Buffer.from(data, 'base64');
  // decode buffer as UTF-8
  const str = buff.toString('utf-8');
  // print normal string
  return str;
}

router.post('api.transactions.create', '/', async (ctx) => {
  try {
    const { body } = ctx.request;
    const { data } = body.message;
    console.log(data);
    const desencr = desencriptado(data);
    console.log(desencr);
    const tipoOperacion = desencr.slice(0, 4);
    const mensajeId = desencr.slice(4, 14);
    const bancoOrigen = desencr.slice(14, 21);
    const cuentaOrigen = desencr.slice(21, 31);
    const bancoDestino = desencr.slice(31, 38);
    const cuentaDestino = desencr.slice(38, 48);
    const monto1 = desencr.slice(48, 64);
    console.log(tipoOperacion);
    console.log(mensajeId);
    console.log(bancoOrigen);
    console.log(cuentaOrigen);
    console.log(bancoDestino);
    console.log(cuentaDestino);
    console.log(monto1);
    const tipooperacion = parseInt(tipoOperacion, 10);
    const mensajeid = parseInt(mensajeId, 10);
    const bancoorigen = parseInt(bancoOrigen, 10);
    const cuentaorigen = parseInt(cuentaOrigen, 10);
    const bancodestino = parseInt(bancoDestino, 10);
    const cuentadestino = parseInt(cuentaDestino, 10);
    const monto = parseInt(monto1, 10);
    console.log(tipooperacion);
    console.log(mensajeid);
    console.log(bancoorigen);
    console.log(cuentaorigen);
    console.log(bancodestino);
    console.log(cuentadestino);
    console.log(monto);
    // eslint-disable-next-line no-console
    // console.log(body);
    // const stringbody = JSON.stringify(body);
    // eslint-disable-next-line no-console
    // console.log(stringbody);
    const transaction1 = {
      tipooperacion,
      mensajeid,
      bancoorigen,
      cuentaorigen,
      bancodestino,
      cuentadestino,
      monto,
    };
    // console.log(transaction1);
    const t = await ctx.orm.transaction3.create(transaction1);
    // console.log(t);
    /* const t = ctx.orm.transaction.build(ctx.request.body);
    console.log(ctx.request.body);
    console.log(t); */
    // await t.save({ field: ['body'] });
    ctx.body = t;
    // eslint-disable-next-line no-console
    ctx.status = 200;
    // eslint-disable-next-line no-self-assign
  } catch (ValidationError) {
    ctx.throw(400);
  }
});
module.exports = router;
