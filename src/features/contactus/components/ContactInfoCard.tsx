
import { dummyContactInfo } from "../index";

const ContactInfoCard = () => (
  <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md text-center">
    <h2 className="text-xl font-semibold mb-2">Contact Marthoma High School</h2>
    <p>{dummyContactInfo.address}</p>
    <p>Email: {dummyContactInfo.email}</p>
    <p>Call us: {dummyContactInfo.phone}</p>
  </div>
);

export default ContactInfoCard;