import Image from "next/image";
import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
  // const { data: session } = useSession();
  // const router = useRouter();

  // if (!session) {
  //   router.push("/");
  //   alert("please sigin to access Draggize");
  // }

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

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
    handleSearch(searchQuery);
  }, [searchQuery]);

  return (
    <DragDropContext onDragEnd={draggableHandle}>
      <div className="relative">
        {/* ... Rest of your code ... */}
        <header className="z-30 bg-stone-100 p-4 w-full fixed top-0 left-0 flex justify-around">
          <h1>Draggize</h1>
          <h1>Contact us</h1>
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
            <div className="flex flex-row mt-4 justify-center gap-2">
              <div className="px-1 md:px-6 py-1 rounded-md bg-green-200 text-green-500">
                fashion
              </div>
              <div className="px-1 md:px-6 py-1 rounded-md bg-yellow-200 text-yellow-500">
                outdoor
              </div>
              <div className="px-1 md:px-6 py-1 rounded-md bg-purple-200 text-purple-500">
                nature
              </div>
              <div className="px-1 md:px-6 py-1 rounded-md bg-sky-200 text-sky-500">
                cars
              </div>
            </div>
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
              <div className="grid gap-6 grid-cols-1 flex-grow md:grid-cols-3">
                {filteredItems.map((idx, i) => (
                  <Draggable key={i} draggableId={`${i + 1}`} index={i}>
                    {(provided) => (
                      <div className="p-2  bg-green-400/80">
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
            </main>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default Index;
