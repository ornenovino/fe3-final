const Footer = () => {
  return (
    <footer className="max-h-20 flex bg-gray-100 justify-between px-40 mt-8 grow">
        <div className="flex items-center">
        <img className="w-60" src="images/DH.png" alt="" />
        </div>
        <div className="flex gap-5 items-center">
          <img className="image w-8 h-8" src="images/ico-facebook.png" alt="" />
          <img className="image w-8 h-8" src="images/ico-instagram.png" alt="" />
          <img className="image w-8 h-8" src="images/ico-whatsapp.png" alt="" />
          <img className="image w-8 h-8" src="images/ico-tiktok.png" alt="" />
        </div>
    </footer>
  )
}

export default Footer
