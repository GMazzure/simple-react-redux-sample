import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, selectByMinAge } from "../../store/slices/photos";

const Photos = () => {
  const dispatch = useDispatch();
  const contador = useSelector((state) => state.contador);
  const { loading, error } = useSelector((state) => state.photos);

  const photos = useSelector(selectByMinAge(contador));

  React.useEffect(() => {
    dispatch(fetchPhotos(1));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Failed to fetch...</div>;

  if (photos)
    return (
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            {photo.title} | {photo.idade}
          </li>
        ))}
      </ul>
    );
};

export default Photos;
