# Church Attendance System - AI Agent Instructions

## Project Overview
This is a web-based church attendance management system with an admin dashboard interface. The system allows tracking member attendance, generating QR codes, and visualizing attendance statistics.

## Architecture

### Frontend Structure
- Located in `/admin-dashboard`
- Pure client-side application using HTML, CSS, and JavaScript
- Uses Chart.js for data visualization
- Material Symbols Rounded for icons
- Key pages:
  - `index.html`: Main dashboard with attendance statistics
  - `members.html`: Member management
  - `attendance.html`: Attendance tracking
  - `reports.html`: Detailed reports
  - `settings.html`: System configuration

### Assets Organization
```
assets/
├── css/
│   ├── dashboard.css    # Dashboard-specific styles
│   └── styles.css       # Global styles
├── js/
│   ├── auth.js         # Authentication logic
│   ├── dashboard.js    # Dashboard charts and interactions
│   ├── main.js        # Core functionality
│   └── qr.js          # QR code generation
└── images/            # Static assets
```

### Backend Integration
- Backend server setup pending in `backend/server.js`
- Frontend prepared for REST API integration

## Key Patterns and Conventions

### Dashboard Charts
The system uses Chart.js for visualizations. See `dashboard.js` for implementation:
```javascript
new Chart(ctx, {
  type: 'line|doughnut',
  data: {
    // Data structure pattern
    datasets: [{
      data: [...],
      borderColor: '#2563eb',
      backgroundColor: 'rgba(37, 99, 235, 0.1)'
    }]
  }
});
```

### Color Scheme
- Primary Blue: `#2563eb`
- Background Gray: `#e5e7eb`
- Text colors defined in `styles.css`

## Development Workflow

### Setup
1. No build process currently - serve directly from filesystem
2. Backend implementation pending - prepared for Node.js/Express

### Testing
- No automated tests implemented yet
- Manual testing through browser dev tools

## Future Integration Points
1. Authentication system (prepared in `auth.js`)
2. REST API endpoints (backend structure ready in `server.js`)
3. QR code generation system (placeholder in `qr.js`)

## Notes for AI Agents
- Frontend views are self-contained in HTML files
- Charts should maintain consistent styling with existing implementations
- Backend API structure pending - prepare for RESTful patterns
- Focus on maintaining the clean separation between UI components and data management