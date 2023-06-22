const fileUpLoad = async (image) => {
    const cloudName = "dvk0btnav";
    const presetName = "Delivery-app-food";
    const urlCloudinary = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", presetName);
    formData.append("cloud_name", cloudName);
  
    try {
      const response = await fetch(urlCloudinary, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        return null;
      }
  
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  
  export default fileUpLoad;