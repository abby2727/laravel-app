import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Order({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Order" />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <div class="flex justify-center items-center">
                            <form class="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4 w-1/2">
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                    >
                                        Username
                                    </label>
                                    <input
                                        class="border border-gray-300 p-2 w-full rounded"
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Enter your username"
                                        required
                                    />
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        class="border border-gray-300 p-2 w-full rounded"
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <div class="mb-4">
                                    <button
                                        class="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}