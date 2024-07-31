// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen bg-[#87CEEB] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white border-4 border-gray-300 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Homer's Web Page</h1>
        <div className="grid grid-cols-4 gap-4 text-5xl">
          {['⏰', '🍞', '👄', '🐛', '🔔', '🍞', '👄', '⏰', '🐛', '🔔', '⏰', '🍞'].map((emoji, index) => (
            <div key={index} className="flex items-center justify-center">
              {emoji}
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="text-8xl">🧔‍♂️</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
