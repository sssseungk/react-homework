import { useRef } from "react";
import FooterBar from "./FooterBar";
import HeaderBar from './HeaderBar';
import { useNavigate } from "react-router-dom";
import pb from "@/api/pocketbase";


export default function AddMusic(){

  const titleRef = useRef(null);
  const artistRef = useRef(null);
  const imageRef = useRef(null);
  const dateRef = useRef(null);
  const genreRef = useRef(null);
  const countRef = useRef(null);
  const totaltimeRef = useRef(null);
  const descriptionRef = useRef(null);
  const profileImageRef = useRef(null);

  const uploadImageRef = useRef(null);
  const uploadProfileImageRef = useRef(null);
  const navigate = useNavigate();

  const handleRegisterMusic = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', titleRef.current.value);
    formData.append('artist', artistRef.current.value);
    formData.append('image', imageRef.current.files[0]);
    formData.append('profile', profileImageRef.current.files[0]);
    formData.append('date', dateRef.current.value);
    formData.append('genre', genreRef.current.value);
    formData.append('count', countRef.current.value);
    formData.append('totaltime', totaltimeRef.current.value);
    formData.append('description', descriptionRef.current.value);

    try {
      await pb.collection('musics').create(formData);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };


  const handleUploadImage = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    uploadImageRef.current.setAttribute('src', imageUrl);
  };

  const handleUploadProfileImage = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    uploadProfileImageRef.current.setAttribute('src', imageUrl);
  };

  return (
    <>
      <HeaderBar/>
      <div className="flex justify-center items-center my-20">
        <div className="border-8 rounded-lg w-3/5">
          <form encType="multipart/form-data" onSubmit={handleRegisterMusic} className="p-10">
            {/* 앨범명 */}
            <div className="flex flex-col mb-10">
              <label htmlFor="title" className="font-semibold">
                Album
              </label>
              <input
                ref={titleRef}
                type="text"
                name="title"
                id="title"
                placeholder="앨범명을 입력해 주세요."
                className="border text-lg border-slate-400 rounded-md w-[400px] h-[50px] pl-2"
              />
            </div>

            {/* 가수 이름 */}
            <div className="flex flex-col mb-10">
              <label htmlFor="artist" className="font-semibold">
                Artist
              </label>
              <input
                ref={artistRef}
                type="text"
                name="artist"
                id="artist"
                placeholder="아티스트를 입력해 주세요."
                className="border text-lg border-slate-400 rounded-md w-[400px] h-[50px] pl-2"
              />
            </div>

            {/* 발매 날짜 */}
            <div className="flex flex-col mb-10">
              <label htmlFor="date" className="font-semibold">
                Date
              </label>
              <input
                ref={dateRef}
                type="text"
                name="date"
                id="date"
                placeholder="발매일을 입력해주세요. (2023. 08. 29)"
                className="border text-lg border-slate-400 rounded-md w-[400px] h-[50px] pl-2"
              />
            </div>
            
            {/* 장르 */}
            <div className="flex flex-col mb-10">
              <label htmlFor="genre" className="font-semibold">
                Genre
              </label>
              <input
                ref={genreRef}
                type="text"
                name="genre"
                id="genre"
                placeholder="장르를 입력해주세요."
                className="border text-lg border-slate-400 rounded-md w-[400px] h-[50px] pl-2"
              />
            </div>

            {/* 앨범 수록곡 개수 */}
            <div className="flex flex-col mb-10">
              <label htmlFor="count" className="font-semibold">
                B-side song
              </label>
              <input
                ref={countRef}
                type="text"
                name="count"
                id="count"
                placeholder="앨범에 수록된 곡 개수를 입력해주세요."
                className="border text-lg border-slate-400 rounded-md w-[400px] h-[50px] pl-2"
              />
            </div>

            {/* 앨범 전체 곡 시간 */}
            <div className="flex flex-col mb-10">
              <label htmlFor="totaltime" className="font-semibold">
                Total Time
              </label>
              <input
                ref={totaltimeRef}
                type="text"
                name="totaltime"
                id="totaltime"
                placeholder="앨범 전체 플레이 시간을 입력해주세요."
                className="border text-lg border-slate-400 rounded-md w-[400px] h-[50px] pl-2"
              />
            </div>

            {/* 앨범 소개 */}
            <div className="flex flex-col mb-10">
              <label htmlFor="totaltime" className="font-semibold">
                Description
              </label>
              <input
                ref={descriptionRef}
                type="text"
                name="description"
                id="description"
                placeholder="앨범 소개를 입력해주세요."
                className="border text-lg border-slate-400 rounded-md w-[400px] h-[50px] pl-2"
              />
            </div>

            {/* 앨범 이미지 */}
            <div className="flex flex-col mb-10">
              <label htmlFor="image" className='text-2xl font-semibold'>Cover Image</label>
              <div className="relative">
                <input
                  ref={imageRef}
                  onChange={handleUploadImage}
                  type="file"
                  accept="*.jpg,*.png,*.jpeg,*.webp,*.avif"
                  name="image"
                  id="image"
                  className="absolute z-10 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex gap-2 overflow-x-auto p-2 w-full h-36 bg-zinc-100 dark:bg-black dark:outline-[1px] dark:outline-double dark:outline-zinc-100/40 dark:rounded">
                  <img
                    ref={uploadImageRef}
                    className="h-[160px] border border-secondary"
                    src="https://as1.ftcdn.net/v2/jpg/03/45/05/92/1000_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
                    alt="이미지"
                  />
                </div>
              </div>
            </div>

            {/* 가수 이미지 */}
            <div className="flex flex-col mb-20">
              <label htmlFor="profile" className='text-2xl font-semibold'>Artist Image</label>
              <div className="relative">
                <input
                  ref={profileImageRef}
                  onChange={handleUploadProfileImage}
                  type="file"
                  accept="*.jpg,*.png,*.jpeg,*.webp,*.avif"
                  name="profile"
                  id="profile"
                  className="absolute z-10 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex gap-2 overflow-x-auto p-2 w-full h-36 bg-zinc-100 dark:bg-black dark:outline-[1px] dark:outline-double dark:outline-zinc-100/40 dark:rounded">
                  <img
                    ref={uploadProfileImageRef}
                    className="h-[160px] border border-secondary"
                    src="https://as1.ftcdn.net/v2/jpg/03/45/05/92/1000_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
                    alt="이미지"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse">
              <button type="submit" className="bg-slate-300 text-xl w-[90px] h-[50px] text-center rounded-xl mr-5 order-2">Add</button>
              <button type="reset" className="bg-slate-300 text-xl w-[90px] h-[50px] text-center rounded-xl order-1">Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <FooterBar/>
    </>
  )
}