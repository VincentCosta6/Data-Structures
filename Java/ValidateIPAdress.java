class Solution {
    public String validIPAddress(String IP) {
        if(IP.contains(".")) {
            if(numberOf(IP, '.') != 3) return "Neither";
            
            for(int i = 0; i < IP.length(); i++) {
                char c = IP.charAt(i);

                if(c == '.') continue;

                if(c == ':' || !isNumeric(c)) return "Neither";
            }

            String[] parts = IP.split("\\.");

            if(parts.length != 4) return "Neither";

            for(String s: parts) {
                if(s.length() == 0 || s.length() > 3) return "Neither";
                
                if(s.charAt(0) == '0' && s.length() > 1 && s.charAt(1) == '0') return "Neither";
                
                int guess = Integer.parseInt(s);

                if(guess == 0) continue;
                else if(guess > 255 || guess < 0 || s.charAt(0) == '0') return "Neither";
            }

            return "IPv4";
        }
        else if(IP.contains(":")) {
            if(numberOf(IP, ':') != 7) return "Neither";
            
            for(int i = 0; i < IP.length(); i++) {
                char c = IP.charAt(i);

                if(c == ':') continue;

                if(c == '.' || !isHex(c)) return "Neither";
            }

            String[] parts = IP.split(":");

            if(parts.length != 8) return "Neither";

            for(String s: parts) {
                if(s.length() == 0 || s.length() > 4) return "Neither";
            }

            return "IPv6";
        }
        else return "Neither";
    }
    
    public int numberOf(String s, char match) {
        int count = 0;

        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == match) count++;
        }

        return count;
    }

    public boolean isNumeric(char c) {
        return c > 47 && c < 58;
    }

    public boolean isHex(char c) {
        return isNumeric(c) || (c > 64 && c < 71) || (c > 96 && c < 103);
    }
}