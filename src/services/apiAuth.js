// import supabase from "./supabase";

// export async function login({ email, password }) {
//   let { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) throw new Error(error.message);

//   return data;
// }

// export async function getCurrentUser() {
//   const { data: session } = await supabase.auth.getSession();
//   if (!session.session) return null;
//   const { data, error } = await supabase.auth.getUser();
//   if (error) throw new Error(error.message);

//   return data?.user;
// }

// solution by Udemy student

import supabase from "./supabase.js";

export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("Login error", { cause: error });
  }

  return data;
};

export async function getCurrentUser() {
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) throw new Error("Login error", { cause: sessionError });
  if (!session?.session) return null;

  const { data: user, error: userError } = await supabase.auth.getUser();

  if (userError) throw new Error("Login error", { cause: userError });

  return user?.user;
}

export async function signout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
  return null;
}

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password, //forgot
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function updateCurrentUser({ fullName, password, avatar }) {
  //update fullName or password
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const {
    data: updateFullnamePasswordData,
    error: updateFullnamePasswordError,
  } = await supabase.auth.updateUser(updateData);
  if (updateFullnamePasswordError)
    throw new Error(updateFullnamePasswordError.message);

  // Check to upload avatar if applicable
  if (!avatar) return updateFullnamePasswordData;
  // upload avatar
  const fileName = `avatar-${fullName}-${Math.random()}`;
  const { error: uploadAvatarError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (uploadAvatarError) throw new Error(uploadAvatarError.message);

  // Url provided by supabase bucket
  const avatarUrl = `https://bpubuakfjtqnkjkugqag.supabase.co/storage/v1/object/public/avatars/${fileName}`;

  const { data: updateAvatarData, error: updateAvatarError } =
    await supabase.auth.updateUser({ data: { avatar: avatarUrl } });

  if (updateAvatarError) throw new Error(updateAvatarError.message);
  return updateAvatarData;
}
