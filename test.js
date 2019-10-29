import test from "ava"
import pkgTemp from "."

test("main", (t) => {
    t.true(pkgTemp.endsWith("node_modules/.cache/pkg-temp"))
})
