const test = require("ava");
const untildify = require("./index.js");
const os = require("os");

const expandsTildePrefixWithHome = (path) =>
  untildify(path) === os.homedir() + path.slice(1);

console.log("untildify('~')", expandsTildePrefixWithHome("~/"));
test("main", (t) => {
  console.log("untildify('~')", untildify("~"));
  t.not(untildify("~"), "~");
  t.not(untildify("~/dev"), "~/dev");
  t.regex(untildify("~/dev"), /\/dev/);
  t.true(expandsTildePrefixWithHome("~/"));
  t.true(expandsTildePrefixWithHome("~\\"));
  t.true(expandsTildePrefixWithHome("~/abc"));
  t.true(expandsTildePrefixWithHome("~\\abc"));
  t.true(expandsTildePrefixWithHome("~/abc/def"));
  t.true(expandsTildePrefixWithHome("~\\abc\\def"));
  t.true(expandsTildePrefixWithHome("~/abc\\def"));
  t.true(expandsTildePrefixWithHome("~\\abc/def"));
});

test("paths where ~ is not current user's home directory", (t) => {
  t.is(untildify("~abc"), "~abc");
  t.is(untildify("/~/"), "/~/");
  t.is(untildify("/~"), "/~");
  t.is(untildify("abc~"), "abc~");
  t.true(expandsTildePrefixWithHome("~/abc~"));
});

test("paths with regex replacement patterns", (t) => {
  t.is(untildify("~$&"), "~$&");
  t.is(untildify("~$1"), "~$1");
  t.true(expandsTildePrefixWithHome("~/$1"));
  t.true(expandsTildePrefixWithHome("~/$&"));
});
