import { MailIcon, Loader2 } from "lucide-react";

const AnswerKeyNotice = () => {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md shadow-sm my-4 max-w-xl mx-auto">
      <div className="flex items-center space-x-3">
        <Loader2 className="animate-spin w-5 h-5 text-yellow-600" />
        <div>
          <p className="font-semibold">We’re trying to fetch the JEE Main 2025 Session 2 answer key...</p>
          Available answer keys:-
          <ul className="list-disc list-inside mt-2">
            <li>JEE Main 2025 Session 2 Date 3/04/2025 Shift 1</li>
</ul>
          <p className="text-sm mt-1">
            If you already have access to the official answer key, please share screen recording, Copy and paste or in any other way with us at{" "}
            <a
              href="mailto:checkmarks.tech@gmail.com"
              className="text-blue-700 underline hover:text-blue-900 inline-flex items-center space-x-1"
            >
              <MailIcon className="inline w-4 h-4" />
              <span>checkmarks.tech@gmail.com or Whatsapp us at +91 9350126101</span> 
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnswerKeyNotice;