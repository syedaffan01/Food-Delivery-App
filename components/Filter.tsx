
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Category} from "@/type";
import {useLocalSearchParams} from "expo-router";
import {useState} from "react";

const Filter = ({categories}: {categories: Category[]}) => {
    const searchParams = useLocalSearchParams();
    const [active, setActive] = useState(searchParams.category || '');

    const handlePress = (id: string) => {}

    const  filterData: (Category | { $id: string; name: string })[] = categories
     ? [{$id: 'all', name: 'ALL'}, ...categories]
    : [{$id: 'all', name: 'ALL'}];

  return (
  <FlatList data={filterData}
            keyExtractor={(item) => item.$id}
            renderItem={({item}) => (
                <TouchableOpacity>
                    <Text>{item.name}</Text>
                </TouchableOpacity>

            )}
            />
  );
};

export default Filter;
