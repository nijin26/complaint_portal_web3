import React, { useState } from "react";
import Button from "@/Components/Button";

const RegisterNCR = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const profileInfo = {
    basicDetails: {
      name: "John Doe",
      email: "johndoe@example.com",
      mobile: 1234567890,
      age: 25,
      gender: "Male",
      dob: "1998-05-10",
      addr: "123 Main Street",
      city: "New York",
      district: "ABC District",
      state: "New York",
      pincode: 12345,
    },
    idDetails: {
      selectedID: "Driving License",
      IDNumber: "DL-123456789",
    },
    relativeDetails: {
      relativeName: "Jane Doe",
      relativeMobile: 9876543210,
      relation: "Other",
    },
  };

  const [selectedComplaint, setSelectedComplaint] = useState({
    userAddress: "",
    userName: "",
    complaintCreatedAt: "",
    complaintDescription: "",
    complaintID: "",
    complaintSubject: "",
    complaintType: "",
    dateAndTime: "",
    image: "",
    landmark: "",
    placeOfIncident: "",
    policeStation: {
      phoneNumber: "",
      stationID: "",
      stationName: "",
    },
    stationSector: "",
    status: "",
    remarks: "",
  });

  const [formData, setFormData] = useState({
    reportType: "NCR",
    reportNumber: "",
    date: "",
    policeStation: "",
    district: "",
    reportDateTime: "",
    complainantName: "",
    complainantAddress: "",
    complaintSubject: "",
    complaintDescription: "",
    placeOfIncident: "",
    incidentDateTime: "",
    witnessAddress: "",
    complaintID: "",
    complainantWalletAddress: "",
    stationWalletAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex items-start justify-between">
      <div className="w-1/2 border sticky top-2 rounded-lg p-8 m-4">
        <div className=" flex justify-between">
          <Button
            outlined={selectedTab !== 1 ? true : false}
            onClick={() => setSelectedTab(1)}
          >
            Complaint
          </Button>
          <Button
            outlined={selectedTab !== 2 ? true : false}
            onClick={() => setSelectedTab(2)}
          >
            Complainant
          </Button>
        </div>
        {selectedTab === 1 ? (
          <div className="w-full">
            <h1 className="my-6 font-bold text-center text-xl">
              Complaint Details
            </h1>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 [&>p]:my-2">
                <p>
                  <span className="font-bold">Complaint ID:</span>{" "}
                  {selectedComplaint.complaintID}
                </p>

                <p className="text-blue-500 cursor-pointer">
                  <span className="font-bold">Complainant's Name:</span>{" "}
                  {selectedComplaint.userName}
                </p>
                <p>
                  <span className="font-bold">Complaint Type:</span>{" "}
                  {selectedComplaint.complaintType}
                </p>
                <p>
                  <span className="font-bold">Complaint Subject:</span>{" "}
                  {selectedComplaint.complaintSubject}
                </p>
                <p>
                  <span className="font-bold">Date and Time:</span>{" "}
                  {selectedComplaint.dateAndTime}
                </p>
                <p>
                  <span className="font-bold">Place of Incident:</span>{" "}
                  {selectedComplaint.placeOfIncident}
                </p>
                <p>
                  <span className="font-bold">Status:</span>{" "}
                  {selectedComplaint.status}
                </p>
              </div>
              <div className="w-full md:w-1/2 [&>p]:my-2">
                <p>
                  <span className="font-bold">Station Sector:</span>{" "}
                  {selectedComplaint.stationSector}
                </p>
                <p>
                  <span className="font-bold">Landmark:</span>{" "}
                  {selectedComplaint.landmark}
                </p>
                <p>
                  <span className="font-bold">Police Station:</span>{" "}
                  {selectedComplaint.policeStation.stationName}
                </p>
                <p>
                  <span className="font-bold">Complaint Created At:</span>{" "}
                  {new Date(
                    selectedComplaint.complaintCreatedAt
                  ).toLocaleString()}
                </p>
                <p>
                  <span className="font-bold block">
                    Complaint Description:
                  </span>{" "}
                  {selectedComplaint.complaintDescription}
                </p>

                <p>
                  <span className="font-bold">Remarks:</span>{" "}
                  {selectedComplaint.remarks}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center">
              <h3 className="text-lg  font-bold mb-2">Image</h3>
              <a href={selectedComplaint.image} target="_blank">
                <img
                  src={selectedComplaint.image}
                  alt="Complaint Image"
                  className="w-64 h-auto"
                />
              </a>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <h1 className="my-4 font-bold text-center text-xl">
              Complainant's Details
            </h1>
            <div>
              {" "}
              <p>
                <strong>Name:</strong> {profileInfo.basicDetails.name}
              </p>
              <p>
                <strong>Email:</strong> {profileInfo.basicDetails.email}
              </p>
              <p>
                <strong>Mobile:</strong> {profileInfo.basicDetails.mobile}
              </p>
              <p>
                <strong>Age:</strong> {profileInfo.basicDetails.age}
              </p>
              <p>
                <strong>Gender:</strong> {profileInfo.basicDetails.gender}
              </p>
              <p>
                <strong>Date of Birth:</strong> {profileInfo.basicDetails.dob}
              </p>
              <p>
                <strong>Address:</strong> {profileInfo.basicDetails.addr}
              </p>
              <p>
                <strong>City:</strong> {profileInfo.basicDetails.city}
              </p>
              <p>
                <strong>District:</strong> {profileInfo.basicDetails.district}
              </p>
              <p>
                <strong>State:</strong> {profileInfo.basicDetails.state}
              </p>
              <p>
                <strong>Pincode:</strong> {profileInfo.basicDetails.pincode}
              </p>
            </div>
            <div className="mt-4 space-y-4">
              <h3 className="font-bold text-stone-500">ID Details</h3>
              <p>
                <strong>Selected ID:</strong> {profileInfo.idDetails.selectedID}
              </p>
              <p>
                <strong>ID Number:</strong> {profileInfo.idDetails.IDNumber}
              </p>
            </div>
            <div className="mt-4 space-y-4">
              <h3 className="font-bold text-stone-500">Relative Details</h3>
              <p>
                <strong>Relative Name:</strong>{" "}
                {profileInfo.relativeDetails.relativeName}
              </p>
              <p>
                <strong>Relative Mobile:</strong>{" "}
                {profileInfo.relativeDetails.relativeMobile}
              </p>
              <p>
                <strong>Relation:</strong>{" "}
                {profileInfo.relativeDetails.relation}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="border rounded-lg p-8 w-1/2 m-4">
        <h1 className="font-bold text-2xl mb-6 text-center">
          Register {formData.reportType}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-start">
            <label htmlFor="reportType" className="font-bold mb-2">
              Select Report Type:
            </label>
            <select
              onChange={handleChange}
              value={formData.reportType}
              id="reportType"
              name="reportType"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="NCR">NCR</option>
              <option value="FIR">FIR</option>
            </select>
          </div>
          <div className="flex flex-col [&>label]:font-bold [&>label]:my-2">
            <label htmlFor="reportNumber">{formData.reportType} Number:</label>
            <input
              type="text"
              id="reportNumber"
              name="reportNumber"
              value={formData.reportNumber}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>

          <div className="flex flex-col [&>label]:font-bold [&>label]:my-2">
            <label htmlFor="policeStation">Police Station:</label>
            <input
              type="text"
              id="policeStation"
              name="policeStation"
              value={formData.policeStation}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>

          <div className="flex flex-col [&>label]:font-bold [&>label]:my-2">
            <label htmlFor="district">District:</label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>

          <div className="flex flex-col [&>label]:font-bold [&>label]:my-2">
            <label htmlFor="reportDateTime">
              Enter Date and Time of Report:
            </label>
            <input
              type="datetime-local"
              id="reportDateTime"
              name="reportDateTime"
              value={formData.reportDateTime}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col [&>label]:font-bold [&>label]:my-2">
            <label htmlFor="complainantName">Enter name of complainant:</label>
            <input
              type="text"
              id="complainantName"
              name="complainantName"
              value={formData.complainantName}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col [&>label]:font-bold [&>label]:my-2">
            <label htmlFor="complainantAddress">Address of complainant:</label>
            <input
              type="text"
              id="complainantAddress"
              name="complainantAddress"
              value={formData.complainantAddress}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col [&>label]:font-bold [&>label]:my-2">
            <label htmlFor="complaintSubject">Complaint Subject:</label>
            <input
              type="text"
              id="complaintSubject"
              name="complaintSubject"
              value={formData.complaintSubject}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col [&>label]:font-bold [&>label]:my-2">
            <label htmlFor="complaintDescription">
              Complaint's Detailed Description:
            </label>
            <textarea
              type="text"
              id="complaintDescription"
              name="complaintDescription"
              value={formData.complaintDescription}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>

          <div className="flex flex-col [&>label]:font-bold [&>label]:my-2">
            <label htmlFor="placeOfIncident">Date and Time of Incident:</label>
            <input
              type="datetime-local"
              id="placeOfIncident"
              name="placeOfIncident"
              value={formData.placeOfIncident}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col [&>label]:font-bold [&>label]:my-2">
            <label htmlFor="incidentDateTime">Place of Incident:</label>
            <input
              type="text"
              id="incidentDateTime"
              name="incidentDateTime"
              value={formData.incidentDateTime}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>

          <div className="flex flex-col [&>label]:font-bold [&>label]:my-2">
            <label htmlFor="witnessAddress">Address of witness:</label>
            <input
              type="text"
              id="witnessAddress"
              name="witnessAddress"
              value={formData.witnessAddress}
              onChange={handleChange}
              className="border border-gray-300 px-2 py-1"
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterNCR;