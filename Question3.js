function checkContains(str1, str2) {
    if (str1 === '') {
        return true;
    }
    for(let i = 0; i < str2.length; i++) {
        if (str2[i] !== str1[0]) {
            continue;
        }
        let found = true;
        for (let j = 0; j < str1.length; j++) {
            if (str1[j] !== str2[i + j]) {
                found = false;
                continue;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
}
