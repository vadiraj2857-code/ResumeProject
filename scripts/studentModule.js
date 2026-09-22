let savedResume = localStorage.getItem("uploadedResume");
let displayResume = document.getElementById("Dummy-paragraph");
if (savedResume) {
    const resumes = JSON.parse(savedResume);
    resumes.forEach((resume,index) => {
        displayResume.innerHTML += `
            <div class="Resume-row resume-${index}">
                <div class="displayedResume-div">
                    <div class="pdf-icon"></div>
                    <p class="file-name">${resume.name}</p>
                </div>
                <div class="deleteResume-div">
                    <button class="delete-resume-buton" onclick="deleteResume(${index})">Delete</button>
                </div>
            </div>
        `;
    });
}
// First param for for each method contains the element, second parameter contains that element  index.
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
            <div class="Resume-row resume-${resumes.length-1}">
                <div class="displayedResume-div">
                    <div class="pdf-icon"></div>
                    <p class="file-name">${file.name}</p>
                </div>
                <div class="deleteResume-div">
                    <button class="delete-resume-buton" onclick="deleteResume(${resumes.length-1})">Delete</button>
                </div>
            </div>
        `;
        alert("Resume uploaded successfully!");
    };
    reader.readAsDataURL(file);
});
// by doing resume-${resumes.length-1} each resume will have a unique class name making us easier to delete.
function deleteResume(index){
    let resumes=JSON.parse(localStorage.getItem("uploadedResume")) || [];
    resumes.splice(index,1);  // Deletion.
    localStorage.removeItem("uploadedResume");  // Updating local storage.
    alert("Resume deleted.");
    const resumeElement=document.querySelector(`.resume-${index}`);
    resumeElement.parentNode.removeChild(resumeElement);
    // Telling the resume element's parent to delete its child named resumeElement.
}  