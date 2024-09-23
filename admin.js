// Ödev Ekleme Fonksiyonu
function addHomework() {
    let homeworkInput = document.getElementById("homework-input").value;
    if (homeworkInput) {
        let homeworkList = document.getElementById("homework-list");
        let li = document.createElement("li");

        li.textContent = homeworkInput;
        
        // Silme düğmesi ekle
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Sil";
        deleteButton.style.marginLeft = "10px";
        deleteButton.onclick = function() {
            homeworkList.removeChild(li);
        };

        li.appendChild(deleteButton);
        homeworkList.appendChild(li);

        // Input temizle
        document.getElementById("homework-input").value = '';
    }
}

// Ders Programı Güncelleme ve Silme Fonksiyonu
function updateSchedule() {
    let scheduleInput = document.getElementById("schedule-input").value;
    let scheduleOutput = document.getElementById("schedule-output");

    if (scheduleInput) {
        let p = document.createElement("p");
        p.textContent = scheduleInput;

        // Silme düğmesi ekle
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Sil";
        deleteButton.style.marginLeft = "10px";
        deleteButton.onclick = function() {
            scheduleOutput.removeChild(p);
        };

        p.appendChild(deleteButton);
        scheduleOutput.appendChild(p);

        // Input temizle
        document.getElementById("schedule-input").value = '';
    }
}

// Sınav Tarihlerini Güncelleme ve Silme Fonksiyonu
function updateExams() {
    let examInput = document.getElementById("exam-input").value;
    let examOutput = document.getElementById("exam-output");

    if (examInput) {
        let p = document.createElement("p");
        p.textContent = examInput;

        // Silme düğmesi ekle
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Sil";
        deleteButton.style.marginLeft = "10px";
        deleteButton.onclick = function() {
            examOutput.removeChild(p);
        };

        p.appendChild(deleteButton);
        examOutput.appendChild(p);

        // Input temizle
        document.getElementById("exam-input").value = '';
    }
}

// Öğrenci Listesini Güncelleme ve Silme Fonksiyonu
function updateStudentList() {
    let studentInput = document.getElementById("student-list-input").value;
    let studentList = document.getElementById("student-list");

    // Mevcut listeyi temizle
    studentList.innerHTML = '';

    let students = studentInput.split('\n');
    students.forEach(function(student) {
        let li = document.createElement("li");
        li.textContent = student;

        // Silme düğmesi ekle
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Sil";
        deleteButton.style.marginLeft = "10px";
        deleteButton.onclick = function() {
            studentList.removeChild(li);
        };

        li.appendChild(deleteButton);
        studentList.appendChild(li);
    });

    // Input temizle
    document.getElementById("student-list-input").value = '';
}