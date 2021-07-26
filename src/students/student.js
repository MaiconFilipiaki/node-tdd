module.exports = {
    sum: notes => {
        if (Math.min(...notes)) {
            const result = notes.reduce((acc, note) => {
        
                acc += note;
                return acc;
            }, 0)
            return notes.length > 5 ? result * 2 : result 
        }
        return 0;
    }
}