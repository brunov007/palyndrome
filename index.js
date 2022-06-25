//Palyndrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const palyndromes = ['osso', 'aabbaa', 'na', 'jao', 'nabuco', 'nurses run', 'madam']

//Return the array with palyndromes
console.log(palyndromes.filter(item => isPalyndrome(item)))

function isPalyndrome(item){
    const itemSplited = item.replace(/[^\w]/g, '').split('')
    const itemSplitedSize = itemSplited.length

    if(itemSplited.length%2 == 0){
        if(getSortedStringFromIndexes(itemSplited, 0, itemSplitedSize/2) == 
            getSortedStringFromIndexes(itemSplited, -1 * itemSplitedSize/2)){
                return true
        }
    }else{
        if(getSortedStringFromIndexes(itemSplited, 0, Math.round(itemSplitedSize/2) -1) == 
            getSortedStringFromIndexes(itemSplited, Math.round(itemSplitedSize/2))){
                return true
        }
    }
    return false
}

function getSortedStringFromIndexes(list, start, end){
    return !end ? list.slice(start).sort().join('') : list.slice(start,end).sort().join('')
}