# YumSpot - Restaurant Review Website

Welcome to **YumSpot**, a platform for reviewing and discovering the best restaurants! Whether you're looking for a local gem or exploring global cuisine, YumSpot helps you find, rate, and share your restaurant experiences.

## Features

- **Restaurant Listings**: Discover restaurants by category, location, and rating.
- **User Reviews**: Share your dining experiences with detailed reviews, ratings, and photos.
- **Search Functionality**: Search for restaurants based on name, cuisine, or location.
- **Profile Management**: Create and manage your personal profile, including updating your name, bio, and email.
- **Responsive Design**: Enjoy the site on any device with our fully responsive layout.
- **Dark Mode**: Switch between light and dark themes to suit your preferences.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/yumspot.git
    ```

2. Navigate into the project directory:
    ```bash
    cd yumspot
    ```

3. Open the `home.html` file in your browser:
    ```bash
    open index.html   # or simply double-click the file
    ```

You can now interact with the site locally.

## Technologies Used

- **HTML5**: For structuring the web pages.
- **CSS3**: For styling the website, including the dark/light theme toggle.
- **JavaScript**: For interactivity, including the login system, profile editing, and restaurant reviews.
- **Responsive Design**: Ensures the site looks great on all devices (desktop, tablet, and mobile).

## How It Works

### 1. **User Authentication**

- Users can sign up or log in to their accounts to leave reviews, rate restaurants, and update their profile.
- Authentication is handled using `localStorage` to store user credentials and data (name, email, password).
- After logging in, users can access their personal profile where they can edit their details, including their bio and email.

### 2. **Restaurant Reviews**

- Each restaurant has a dedicated page with a detailed review section, including a rating system.
- Users can add reviews with text and ratings and update their past reviews.
- Reviews are stored in `localStorage`, and new users can view them to help make their dining decisions.

### 3. **Profile Management**

- Users can edit their profile information via a modal window, which allows them to update their name, email, and bio.
- The profile page shows their current data after login and can be updated in real-time.

## Usage

Once logged in, users can:

- Browse restaurants and leave reviews for them.
- Rate restaurants on a scale from 1 to 5 stars.
- View and edit their profile and update their bio and contact info.
- Log out to end the session.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## Contact

For any inquiries, please contact us at [support@yumspot.com](mailto:support@yumspot.com).

---

Thank you for visiting YumSpot! Enjoy exploring and reviewing the best restaurants in your area!
