import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Authentication {
  public static passwordHash = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
  };

  public static passwordCompare = async (text: string, encryptedText: string): Promise<boolean> => {
    return await bcrypt.compare(text, encryptedText);
  };

  public static generateToken = (id: number, username: string): string => {
    const secretKey: string = process.env.JWT_SECRET_KEY || 'secret';
    const token: string = jwt.sign({ id, username }, secretKey);

    return token;
  };
}

export default Authentication;
