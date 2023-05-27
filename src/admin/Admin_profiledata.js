import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import img from '../img/profile.png';
import '../css/admin_profile.css';
import Avatar from 'react-avatar-edit';
import { Button } from 'primereact/button';
import 'primereact/resources/primereact.min.css';

const Admin_profiledata = () => {
  const [image, setImage] = useState('');
  const [imageCrop, setImageCrop] = useState(false);
  const [src, setSrc] = useState(false);
  const [profile, setProfile] = useState([]);
  const [pview, setPView] = useState(false);
  const [showDialog, setShowDialog] = useState(false); 

  const profileFinal = profile.length ? profile[0].pview : '';

  const onClose = () => {
    setPView(false);
  };

  const onCrop = (view) => {
    setPView(view);
  };

  const saveCropImage = () => {
    setProfile([{ pview: pview }]);
    setImageCrop(false);
    setShowDialog(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === 'image') {
      setImage(file);
    } else {
      setImage(null);
    }
  };
  const openDialog = () => {
    setImageCrop(true);
  setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>

      <div className='glass p-3 rounded w-50'>
        <div className='profile_img text-center p-4'>
          <div className='flex flex-column justify-content-center align-items-center '>
            <img
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid green',
              }}
              onClick={openDialog}
              src={profileFinal || img}
              alt=''
            />
            <br />
            <label htmlFor='' className='mt-3 fw-bold fs-2'>
              Aditi Shrestha
            </label>
            {showDialog && (
            <div className='dialog-overlay'>
                <Dialog
                   visible={imageCrop}
                   header={() => (
                     <p htmlFor='' className='fs-3 fw-semibold textColor'>
                       Update Profile
                     </p>
                   )}
                   onHide={closeDialog}
                   className='dialog-container'
                   modal
                >
                  <div className='confirmation-content flex flex-row align-items-center'>
                    <Avatar
                      width={300}
                      height={200}
                      onCrop={onCrop}
                      onClose={onClose}
                      src={src}
                      shadingColor={'#474649'}
                      backgroundColor={'#474649'}
                    />

                    <Button
                      onClick={saveCropImage}
                      label='Save Changes'
                      icon=''
                      className='btn bg-success text-white'
                    />
                  </div>
                </Dialog>
              
            </div>
            )}
            <input
              type='file'
              accept='image/*'
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />

          </div>
        </div>
        <form>
          <div className='mb-3 d-flex justify-content-around'>
            <label htmlFor='name'>
              <strong>First name</strong>: Aditi
            </label>

            <label htmlFor='email'>
              <strong>Last name</strong>: Shrestha
            </label>
          </div>
          <div className='mb-3 d-flex justify-content-around'>
            <label htmlFor='password'>
              <strong>Email:</strong>
            </label>
            <label htmlFor='password'>
              <strong>Phone number:</strong>
            </label>
          </div>
          <div className='change flex-row d-flex justify-content-around'>
            <button type='submit' className='btn btn2 rounded-12'>
              Change Information
            </button>
            <button type='submit' className='btn btn2 rounded-12 '>
              Change password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin_profiledata;
