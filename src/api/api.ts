import { convex } from "@/lib/convex";
import { api } from "../../convex/_generated/api";

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

interface AdmissionFormData {
    studentName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: string;
    address: string;
    guardianName: string;
    guardianPhone: string;
    previousSchool?: string;
    grade: string;
    message?: string;
}

const postQuery = async (queryData: ContactFormData) => {
    try {
        const result = await convex.action(api.school.submitSchoolContact, {
            firstName: queryData.firstName,
            lastName: queryData.lastName,
            email: queryData.email,
            phone: queryData.phone,
            subject: queryData.subject,
            message: queryData.message,
        });

        return {
            success: true,
            message: "Contact form submitted successfully",
        };
    } catch (error) {
        console.error("Error submitting query:", error);
        throw error;
    }
}

const postAdmissionForm = async (formData: FormData) => {
    try {
        // Convert FormData to AdmissionFormData object
        const admissionData: AdmissionFormData = {
            studentName: formData.get("studentName") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            dateOfBirth: formData.get("dateOfBirth") as string,
            gender: formData.get("gender") as string,
            address: formData.get("address") as string,
            guardianName: formData.get("guardianName") as string,
            guardianPhone: formData.get("guardianPhone") as string,
            previousSchool: formData.get("previousSchool") as string || undefined,
            grade: formData.get("grade") as string,
            message: formData.get("message") as string || undefined,
        };

        const result = await convex.action(api.school.submitSchoolAdmission, {
            studentName: admissionData.studentName,
            email: admissionData.email,
            phone: admissionData.phone,
            dateOfBirth: admissionData.dateOfBirth,
            gender: admissionData.gender,
            address: admissionData.address,
            guardianName: admissionData.guardianName,
            guardianPhone: admissionData.guardianPhone,
            previousSchool: admissionData.previousSchool,
            grade: admissionData.grade,
            message: admissionData.message,
        });

        return {
            success: true,
            message: "Admission form submitted successfully",
        };
    } catch (error) {
        console.error("Error submitting admission form:", error);
        throw error;
    }
};

export {
    postQuery,
    postAdmissionForm
}