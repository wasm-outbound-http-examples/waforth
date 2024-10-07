// Based on official example: https://github.com/remko/waforth/blob/v0.20.1/src/web/examples/fetch/fetch.ts
import WAForth, { withLineBuffer } from "waforth";

const forth = new WAForth();
forth.onEmit = withLineBuffer(console.log);
await forth.load();

forth.bindAsync("get", async () => {
  const url = forth.popString();
  const result = await (
    await fetch(url)
  ).text();
  forth.pushString(result);
});


forth.interpret(`
: HTTPGET-CB ( -- )
  IF
    ." Text: " TYPE CR
  ELSE
    ." Unable to fetch " CR
  THEN
;

: HTTPGET ( -- )
  ['] HTTPGET-CB
  S" get" SCALL
;

: URL$  S" https://httpbin.org/anything" ;
URL$ HTTPGET
`);
