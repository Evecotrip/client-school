
const API_URL = import.meta.env.VITE_API_URL;

const postQuery = async (queryData: any) => {
    try {
        const response = await fetch(`${API_URL}/submit-school-query-JJ`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(queryData),
        });

        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || "Failed to submit query");
        }
        return result;
    } catch (error) {
        console.error("Error submitting query:", error);
        throw error;
    }
}

const postAdmissionForm = async (formData: FormData) => {
    try {
        const response = await fetch(`${API_URL}/submit-student-admission`, {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || "Failed to submit admission form");
        }
        return result;
    } catch (error) {
        console.error("Error submitting admission form:", error);
        throw error;
    }
};

export {
    postQuery,
    postAdmissionForm
}