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
        localStorage.setItem(
            "uploadedResume",
            JSON.stringify(resumeData)
        );
        alert("Resume uploaded successfully!");
    };
    reader.readAsDataURL(file);
});