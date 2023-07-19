import React, { useState } from "react";

export const SubmitForm = () => {
  const [fileContent, setFileContent] = useState("");
  const [showModal , setShowModal] = useState(false);
  const [fileTypeError, setFileTypeError] = useState({
    state: false,
    message: "",
  });
  const [validating, setValidating] = useState(false);
  const toggleModal = () => setShowModal((prev) => !prev);
  const uploadJsonHandler = (event) => {
    setValidating(true);
    const file = event.target.files[0];
    if (file.type !== "application/json") {
      setFileTypeError({ state: true, message: "Invalid file format" });
      setValidating(false);
      return;
    }
    setFileTypeError({ state: false, message: "" });
    const reader = new FileReader();

    reader.onload = function (e) {
      const content = JSON.parse(e.target.result);
      setFileContent(JSON.stringify(content, null, 2));
      setValidating(false);
    };

    reader.readAsText(file);
  };
  const handleBtn = () => {
    toggleModal();
    setFileContent("");
  }
  return (
    <div className="pt-12 md:px-11 px-6 flex flex-col justify-center items-center gap-6 mb-24">
      <form className=" md:w-1/2 w-full">
        <div className="mb-6 w-full">
          <label htmlFor="fullName" className="block mb-5  md:text-xl text-lg">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className=" w-full bg-[#FAFAFA] px-4 py-3 rounded-lg text-xl outline-none"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="mb-6 w-full">
          <label htmlFor="email" className="block mb-5  md:text-xl text-lg">
            Email
          </label>
          <div className="flex justify-between bg-[#FAFAFA] px-4">
            <input
              type="email"
              id="email"
              className=" w-full bg-[#FAFAFA] py-3 rounded-lg text-xl outline-none"
              placeholder="Email"
              required
            />
            <img src="/email.svg" />
          </div>
        </div>
        <div className="mb-6 w-full">
          <h1 className="block mb-5  md:text-xl text-lg">Upload JSON File</h1>
          {fileTypeError.state && (
            <p className=" text-red-500">{fileTypeError.message}</p>
          )}
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointerhover:bg-gray-100 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <img src={`${validating ? "/load.svg" : "/fileSvg.svg"}`} />
                <p className=" text-lg font-seimbold text-gray-400">
                  {validating ? "Validating..." : "Browse File"}
                </p>
              </div>
              <input
                onChange={uploadJsonHandler}
                disabled={validating}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>
          </div>
        </div>
        <div className="mb-6 w-full">
          <h1 className="block mb-5  md:text-xl text-lg">File Content</h1>
          <div className="bg-[#FAFAFA] outline-none p-4 h-52 w-full rounded-lg overflow-y-scroll">
            <pre>{fileContent}</pre>
          </div>
        </div>
      </form>
      <div className="fixed bg-white bottom-0 left-0 right-0 flex gap-2  justify-around items-center px-8 py-5 border-2 border-t-[rgba(0, 0, 0, 0.20)]">
      <button
      onClick={toggleModal}
      disabled={fileContent === ""}
        className="disabled:cursor-not-allowed md:w-fit w-full flex items-center justify-center gap-4 rounded-full py-4 md:px-20 px-10 bg-[#3063c8] disabled:bg-[#3063c890] text-white"
      >
      Submit 
      </button>
    </div>

    <div id="small-modal" tabindex="-1" class={`fixed flex justify-center items-center ${!showModal && "hidden" } z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full overlay`}>
    <div class="relative w-full max-w-md max-h-full">
        <div className="bg-white rounded-3xl flex flex-col justify-center items-center py-5 gap-4">
          <img className=" mt-6" src="/done.svg" />
          <h1 className="text-[#4381FF] font-semibold text-lg">Success!</h1>
          <h1>524 entries successfully uploaded</h1>
          <button onClick={handleBtn} className=" text-white bg-[#3062C8] w-1/2 rounded-full px-8 py-3">Go to my Entries</button>
          <button onClick={toggleModal} className=" text-[#4381FF] bg-[#E9F0FF] w-1/2 rounded-full px-8 py-3">Cancel</button>
        </div>
    </div>
</div>
    </div>
  );
};
