// Code your solution here
function findMatching(drivers, string) {
    const result = drivers.filter(function(n) {
        if (n.toLowerCase() === string.toLowerCase()) {
            return string
        }
    })
    return result
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(function(name) {
        if (string.substring(0, 2) === name.substring(0, 2))
            return name
    })
    return result
}

function matchName(drivers, string) {
    const result = drivers.filter(function(names) {
        if (names['name'] === string) {
            return names
        }
    })
    return result
}





