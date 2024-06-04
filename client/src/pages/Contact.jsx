import { useState } from "react"

export default function Contact() {

  const[formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]:e.target.value.trim()})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  


  return (
    <div className="p-5">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[40px] font-bold">Contact Us</h2>
        <div className="flex flex-col gap-5 md:gap-40 md:mt-5  md:flex-row py-3 ">
          <div className="flex flex-col gap-5">
            <p className="text-xl font-semibold">Store in London</p>
            <span className="text-md">1418 River Drive, Suite 35 Cottonhall, CA 9622 United Kingdom</span>
            <span className="text-md">
              sale@uomo.com
              <br />
              +44 20 7123 4567
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl font-semibold">Store in London</p>
            <span className="text-md">1418 River Drive, Suite 35 Cottonhall, CA 9622 United Kingdom</span>
            <span className="text-md">
              sale@uomo.com
              <br />
              +44 20 7123 4567
            </span>
          </div>
        </div>

        <div className="card h-fit max-w-[1000px] py-5 md:mt-5" >
                    <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label className="pb-1 text-xs uppercase tracking-wider"></label>
                                    <input type="text" id="name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" onChange={handleChange} />
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label className="pb-1 text-xs uppercase tracking-wider"></label>
                                    <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label className="pb-1 text-xs uppercase tracking-wider"></label>
                                <textarea id="textarea" name="textarea" onChange={handleChange} cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                        </div>
                    </form>
                </div>
      </div>
    </div>
  )
}
