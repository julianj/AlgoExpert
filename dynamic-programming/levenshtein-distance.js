/*
# 0(nm) time | 0(nm) space
def levenshteinDistance(stril, str2):
edits = [[x for x in range(len(str1) + 1)] for y in range(len (str2) + 1)]
for i in range(1, len(str2) + 1):
edits[i][0] = edits[i - 1][0] + 1
for i in range(1, len(str2) + 1):
for j in range (1,ll ../ len(str1) + 1):
if str2[i - 1] == stri[j - 1]:
edits[i](j] = edits[i - 1](j - 1]
else:
edits[ilfil = 1 + min(edits [i - 11(g - 11, edits[illi - 11, edits[i - 11(g1)
return edits [-1][-1]
*/

function levenshteinDistance(str1, str2) {
    let matrix = [];
    for (let r = 0; r < str1.length; r++) {
        row = [];
        for (let c = 0; c < str2.length; c++) {
            row.push(c);
        }
        matrix.push(row); 
    }
    return matrix;
}

function levenshteinDistance2(str1, str2) {
    map1 = new Map();
    map2 = new Map();
    steps = 0;
    for (let char of str1) {
        value = map1.get(char) || 0;
        map1.set(char, value + 1);
    }
    //str2 = str2.split('').sort().join('');

    for (char of str2) {
        if (map1.has(char)) {
            value = map1.get(char);
            if (value > 1) {
                map1.set(char, value - 1);
            } else {
                map1.delete(char);
            }
        } else {
            value = map2.get(char) || 0;
            map2.set(char, value + 1);
        }
    }
    //return map1.size + (map2.size - map1.size);
    return map2.size;

}


// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;

console.log(levenshteinDistance('abc', 'yabcx'));
//console.log(levenshteinDistance('abc', 'yabd'));
//console.log(levenshteinDistance('biting', 'mitten'));
//console.log(levenshteinDistance('', 'abc'));