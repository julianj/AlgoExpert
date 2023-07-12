function sweetAndSavory(dishes, target) {
    let sweetDish = 0;
    let savoryDish = 0;
    let bestFlavorProfile = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < dishes.length; i++) {
        for (let j = i + 1; j < dishes.length; j++) {
            if (dishes[i] < 0) {
                // looking for a savory pairing
                if (dishes[j] > 0) {
                    fP = dishes[i] + dishes[j];
                    if (fP > bestFlavorProfile && fP <= target) {
                        sweetDish = dishes[i];
                        savoryDish = dishes[j];
                        bestFlavorProfile = fP;
                    }
                }
            } else {
                // looking for a sweet pairing
                if (dishes[j] < 0) {
                    fP = dishes[i] + dishes[j];
                    if (fP > bestFlavorProfile && fP <= target) {
                        sweetDish = dishes[j];
                        savoryDish = dishes[i];
                        bestFlavorProfile = fP;
                    }
                }
            }
        }
    }
    return [sweetDish, savoryDish];
}

console.log(sweetAndSavory([5, -10], -4));
