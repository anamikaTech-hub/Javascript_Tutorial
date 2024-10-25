////-----------------EXCEPTION HANDLING------------------////

try {
    let result = riskyOperation();
} catch (error) {
    console.log("An error occurred: " + error.message);
} finally {
    console.log("This runs regardless of the outcome");
}
