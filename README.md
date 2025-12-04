# WhatsApp Clone

A modern, real-time messaging application inspired by WhatsApp, built with React, TypeScript, and Tailwind CSS.

## Features

- **Real-time Messaging** - Send and receive messages instantly
- **User Authentication** - Secure login and registration
- **Chat List** - View all your conversations in one place
- **Search Functionality** - Quickly find chats and messages
- **User Profiles** - Customizable avatars and user information
- **Message Status** - See when messages are sent, delivered, and read
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Group Chats** - Create and manage group conversations
- **Media Sharing** - Share images, videos, and files
- **Typing Indicators** - See when someone is typing

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Routing**: React Router

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/whatsapp-clone.git
cd whatsapp-clone
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
whatsapp-clone/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── ChatList/     # Chat list component
│   │   ├── ChatWindow/   # Chat window component
│   │   └── ...
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Configuration

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_SOCKET_URL=your_socket_url
```

## Features in Detail

### Chat Interface
- Clean and intuitive chat interface
- Message bubbles with timestamps
- Smooth scrolling and animations
- Message grouping by date

### User Experience
- Fast and responsive UI
- Optimistic updates for instant feedback
- Error handling and retry mechanisms
- Loading states and skeletons

### Security
- Encrypted communications
- Secure authentication
- Protected routes
- Input sanitization

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

- [ ] Voice messages
- [ ] Video calls
- [ ] Status/Stories feature
- [ ] Message reactions
- [ ] Dark mode
- [ ] End-to-end encryption
- [ ] Push notifications
- [ ] Desktop application (Electron)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by WhatsApp
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/whatsapp-clone](https://github.com/yourusername/whatsapp-clone)

---

Made with ❤️ by [Your Name]