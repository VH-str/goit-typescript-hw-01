export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}


const RoleDescription: Record<UserRole, string> = {
  [User Role.admin]: 'Admin User',
  [User Role.editor]: 'Editor User',
  [User Role.guest]: 'Guest User',
};


console.log(RoleDescription[User Role.admin]); 
console.log(RoleDescription[User Role.editor]); 
console.log(RoleDescription[User Role.guest]); 
