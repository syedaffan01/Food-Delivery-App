import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import useAuthStore from "@/store/auth.store";
import { account } from "@/lib/appwrite";
import { router } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Profile = () => {
    const { user, setUser, setIsAuthenticated } = useAuthStore();

    const handleLogout = async () => {
        try {
            await account.deleteSession("current");
            setUser(null);
            setIsAuthenticated(false);
            router.replace("/sign-in");
        } catch (error) {
            console.log("Logout error:", error);
        }
    };

    return (
        <ScrollView className="flex-1 bg-[#F9F9F9]">
            {/* Header */}
            <View className="flex-row items-center justify-between px-4 pt-12 pb-4">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={26} color="#000" />
                </TouchableOpacity>
                <Text className="text-lg font-semibold">Profile</Text>
                <Ionicons name="search-outline" size={24} color="#000" />
            </View>

            {/* Avatar */}
            <View className="items-center mt-3">
                <View className="relative">
                    <Image
                        source={{ uri: user?.avatar }}
                        className="w-28 h-28 rounded-full"
                    />
                    <View className="absolute bottom-1 right-1 bg-orange-500 rounded-full p-2">
                        <MaterialIcons name="edit" size={16} color="#fff" />
                    </View>
                </View>
            </View>

            {/* Card */}
            <View className="mx-4 mt-6 bg-white rounded-3xl p-6 shadow-sm">

                {/* Full Name */}
                <View className="flex-row items-start mb-5">
                    <Ionicons name="person-circle-outline" size={26} color="#F39C12" />
                    <View className="ml-3 flex-1">
                        <Text className="text-gray-500">Full Name</Text>
                        <Text className="text-base font-semibold">
                            {user?.name || ""}
                        </Text>
                    </View>
                </View>

                {/* Email */}
                <View className="flex-row items-start mb-5">
                    <MaterialIcons name="email" size={24} color="#F39C12" />
                    <View className="ml-3 flex-1">
                        <Text className="text-gray-500">Email</Text>
                        <Text className="text-base font-semibold">
                            {user?.email || ""}
                        </Text>
                    </View>
                </View>

            </View>

            {/* Buttons */}
            <View className="px-6 mt-8 mb-10">

                {/* Edit Profile */}
                <TouchableOpacity
                    className="bg-[#FFE7C5] border border-[#F39C12] py-3 rounded-3xl mb-4"
                >
                    <Text className="text-center text-[#F39C12] font-semibold text-base">
                        Edit Profile
                    </Text>
                </TouchableOpacity>

                {/* Logout */}
                <TouchableOpacity
                    onPress={handleLogout}
                    className="bg-[#FFE5E5] border border-[#FF5A5A] py-3 rounded-3xl"
                >
                    <Text className="text-center text-[#FF4D4D] font-semibold text-base">
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Profile;

