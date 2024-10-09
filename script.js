function showSemesters() {
    const type = document.querySelector('input[name="student"]:checked').value;
    document.getElementById('semester-selection').classList.remove('hidden');
    ['semester-1', 'semester-2'].forEach(id => document.getElementById(id).classList.toggle('hidden', type === 'dsy'));
    ['semester-3', 'semester-4'].forEach(id => document.getElementById(id).classList.remove('hidden'));
}

function toggleAllClear(semester, totalCredits) {
    const isChecked = document.querySelector(`#semester-${semester} .all-clear`).checked;
    document.querySelectorAll(`#semester-${semester} .subject`).forEach(subject => subject.checked = false);
    document.querySelector(`#semester-${semester} .subjects`).classList.toggle('hidden', isChecked);
    document.getElementById(`semester-${semester}-credits`).innerText = isChecked ? totalCredits : 0;
}

function calculateCredits() {
    let total = 0;
    [1, 2, 3, 4].forEach(semester => {
        const subjects = document.querySelectorAll(`#semester-${semester} .subject:checked`);
        let credits = [...subjects].reduce((sum, subject) => sum + parseInt(subject.value), 0);
        credits = document.querySelector(`#semester-${semester} .all-clear`).checked ? document.getElementById(`semester-${semester}-credits`).innerText : credits;
        total += parseInt(credits);
        document.getElementById(`semester-${semester}-credits`).innerText = credits;
    });
    document.getElementById('total-credits').innerText = total;
    document.getElementById('result').classList.remove('hidden');
}
