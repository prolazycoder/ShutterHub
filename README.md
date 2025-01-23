# ShutterHub  

A user-friendly photo gallery website enabling users to upload, browse, and purchase high-quality photos.  

## Project Overview  
ShutterHub is a dynamic photo gallery platform that allows users to explore, upload, and purchase visually stunning photos. The application combines an intuitive user interface with a robust backend to deliver a seamless experience. From secure authentication to an efficient photo approval system and payment gateway integration, ShutterHub is designed to cater to photographers, art enthusiasts, and buyers alike.  

## Features  
1. **Photo Upload & Browsing**  
   - Users can upload, explore, and view photos in a responsive and visually appealing gallery interface.  

2. **E-Commerce Capabilities**  
   - Integrated a secure payment gateway for purchasing photos.  

3. **Admin Review System**  
   - Admins can review and approve uploaded photos before they are available for sale.  

4. **Authentication & Security**  
   - Implemented secure user authentication using Django Rest Framework.  

5. **Data Management**  
   - Used PostgreSQL for managing user data, photo metadata, and transaction records, ensuring scalability and efficient data handling.  

## Technology Stack  
- **Frontend**: React.js  
- **Backend**: Django with Django Rest Framework (DRF)  
- **Database**: PostgreSQL  
- **Payment Gateway**: Secure third-party integration  

## Installation and Setup  

### Prerequisites  
Ensure you have the following installed on your system:  
- Python (>= 3.8)  
- Node.js (>= 14.x)  
- PostgreSQL  

### Backend Setup  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/ShutterHub.git
   cd ShutterHub/backend
   ```  
2. Create a virtual environment:  
   ```bash
   python -m venv env
   source env/bin/activate  # For Windows: env\Scripts\activate
   ```  
3. Install dependencies:  
   ```bash
   pip install -r requirements.txt
   ```  
4. Set up the database:  
   - Create a PostgreSQL database.  
   - Update database credentials in `settings.py`.  
   - Run migrations:  
     ```bash
     python manage.py makemigrations
     python manage.py migrate
     ```  
5. Start the server:  
   ```bash
   python manage.py runserver
   ```  

### Frontend Setup  
1. Navigate to the frontend directory:  
   ```bash
   cd ../frontend
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Start the development server:  
   ```bash
   npm start
   ```  

## Usage  
- Access the application at `http://localhost:3000` for the frontend.  
- Use `http://127.0.0.1:8000` for backend API endpoints.  

## Future Improvements  
- Add support for advanced search and filtering options.  
- Implement a recommendation system for personalized photo suggestions.  
- Optimize the performance for handling large photo galleries.  


