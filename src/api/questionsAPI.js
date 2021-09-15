export const fetchQuestions = async () => {
    try {
        const {results} = await fetch("https://opentdb.com/api.php?amount=10&type=boolean")
        .then(r => r.json())
        return [null, results]
    } catch (error) {
        return [error.message, null]
    }
}
export const fetchCategories = async () => {
    try {
        const results = await fetch("https://opentdb.com/api_category.php").then(r => r.json())
        return [null, results]
    } catch (error) {
        return [error.message, null]
    }
}
export const fetchMaxQuestions = async (categoryId) => {
    try {
        const results = await fetch("https://opentdb.com/api_count.php?category=" + categoryId).then(r => r.json())
        return [null, results]
    } catch (error) {
        return [error.message, null]
    }
}
export const fetchQuestionsWithSettings = async (questionsAmount, CategoryId, difficulty) => {
    let URL = "https://opentdb.com/api.php?" + "amount=" + questionsAmount + "&category=" + CategoryId + "&difficulty=" + difficulty;

    try {
        const results = await fetch(URL).then(r => r.json())
        return [null, results]
    } catch (error) {
        return [error.message, null]
    }
}