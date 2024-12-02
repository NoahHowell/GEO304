document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const answers = {
        q1: 'a',
        q2: 'b',
        q3: 'c',
        q4: 'b',
        q5: 'c',
        q6: 'a',
        q7: 'b',
        q8: 'a',
        q9: 'a',
        q10: 'b'
    };

    let score = 0;
    const formData = new FormData(event.target);
    
    for (const [question, answer] of formData.entries()) {
        if (answer === answers[question]) {
            score++;
        }
    }

    alert(`You scored ${score} out of 10`);
});