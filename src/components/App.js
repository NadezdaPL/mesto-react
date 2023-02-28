import React from "react";
import Header from "./Header";
import Main from "./Main";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen("popup_opened");
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen("popup_opened");
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen("popup_opened");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);  
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
