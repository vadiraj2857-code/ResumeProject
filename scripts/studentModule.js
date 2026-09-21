let savedResume = localStorage.getItem("uploadedResume");
let displayResume = document.getElementById("Dummy-paragraph");
if (savedResume) {
    const resumes = JSON.parse(savedResume);
    resumes.forEach(resume => {
        displayResume.innerHTML += `
            <div class="Resume-row">
                <div class="displayedResume-div">
                    <div class="pdf-icon"></div>
                    <p class="file-name">${resume.name}</p>
                </div>
                <div class="deleteResume-div">
                    <button class="delete-resume-buton">Delete</button>
                </div>
            </div>
        `;
    });
}
// _blank is used to tell the browser to open in a new window
// Here resume contains the first element of the array i.e, the first object.
const uploadBtn = document.getElementById("add-resume-button");
const resumeInput = document.getElementById("resumeInput");
uploadBtn.addEventListener("click", function () {
    resumeInput.click();
});
resumeInput.addEventListener("change", () => {
    const file = resumeInput.files[0];
    if (!file) {
        return;
    }
    if (file.type !== "application/pdf") {
        alert("Please upload a PDF file.");
        return;
    }
    const reader = new FileReader();
    reader.onload = () => {
        const resumeData = {
            name: file.name,
            type: file.type,
            size: file.size,
            data: reader.result
        };
        let resumes=JSON.parse(localStorage.getItem("uploadedResume")) || [];
        // Because the same key can have only 1 value at a time, so we create array of objects to store multiple resume details under same key
        // View the local storage for better understanding
        resumes.push(resumeData);
        localStorage.setItem(
            "uploadedResume",
            JSON.stringify(resumes)
        );
        displayResume.innerHTML += `
            <div class="Resume-row">
                <div class="displayedResume-div">
                    <div class="pdf-icon"></div>
                    <p class="file-name">${file.name}</p>
                </div>
                <div class="deleteResume-div">
                    <button class="delete-resume-buton">Delete</button>
                </div>
            </div>
        `;
        alert("Resume uploaded successfully!");
    };
    reader.readAsDataURL(file);
});
