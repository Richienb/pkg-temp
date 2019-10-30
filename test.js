import test from "ava"
import pkgTemp from "."

test("main", (t) => {
    t.true(pkgTemp.endsWith("pkg-temp"))
})
