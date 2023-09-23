import Image from "next/image";
import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { signOut } from "firebase/auth";
import { auth } from "@/pages/api/firebase";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

const imageTags = {
  1: "fashion",
  2: "fashion",
  3: "outdoor",
  4: "fashion",
  5: "fashion",
  6: "outdoor",
  7: "cars",
  8: "outdoor",
  9: "nature",
  10: "nature",
  11: "nature",
  12: "cars",
};

function Index() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Call the Firebase signOut function
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (query) => {
    const filtered = Object.keys(imageTags).filter((key) =>
      imageTags[key].toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  function draggableHandle(results) {
    // console.log(results);
    const { source, destination } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    const reOrderedItem = [...filteredItems];
    const [removedItem] = reOrderedItem.splice(source.index, 1);
    reOrderedItem.splice(destination.index, 0, removedItem);
    setFilteredItems(reOrderedItem);
  }

  // Apply filtering when the search query changes
  useEffect(() => {
    setIsLoading(true);
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    handleSearch(searchQuery);
    return () => clearTimeout(timerId);
  }, [searchQuery]);

  return (
    <DragDropContext onDragEnd={draggableHandle}>
      <div className="relative">
        {/* ... Rest of your code ... */}
        <header className="backdrop-blur-sm z-30 bg-white/80 p-4 w-full fixed top-0 left-0 flex justify-around">
          <h1>Draggize</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-1 rounded-full bg-red-500 hover:bg-red-600"
          >
            Logout
          </button>
        </header>
        <div
          className="relative h-[20rem] bg-cover bg-center"
          style={{ backgroundImage: `url("/flower.jpg")` }}
        ></div>
        <div className="flex justify-center items-center z-20 bg-black bg-opacity-10 w-full h-[20rem] absolute inset-0 ">
          <div>
            <input
              placeholder="search by tag"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[250px] md:w-[600px] bg-slate-200 rounded-full px-4 py-2.5 focus:outline-none focus:ring focus:ring-amber-600 focus:ring-offset-4 "
            />
          </div>
        </div>

        {/* main */}
        <Droppable droppableId="CHARACTERS">
          {(provided) => (
            <main
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="bg-red-100 px-20 py-8 w-full"
            >
              {isLoading && <Loader />}
              {filteredItems.length === 0 && !isLoading && (
                <h3 className="text-center text-2xl font-medium">
                  no search found
                </h3>
              )}
              {!isLoading && (
                <div className="grid gap-6 grid-cols-1 flex-grow md:grid-cols-3">
                  {filteredItems.map((idx, i) => (
                    <Draggable key={i} draggableId={`${i + 1}`} index={i}>
                      {(provided) => (
                        <div className="p-2  bg-green-200/80">
                          <Image
                            alt={`image${idx}`}
                            src={`/${idx}.jpeg`}
                            height={500}
                            width={400}
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            className="max-h-[33rem]"
                          />
                          <div className="mt-2">
                            <p>
                              tag: <span>{imageTags[idx]}</span>
                            </p>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </main>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default Index;
