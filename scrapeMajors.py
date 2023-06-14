

scraped_text = []
i = 0

with open('./Majors.txt') as f:
    
    for line in f:
        if line != '\n':
            num = "'" + str(i) + "',"
            major = "'" + line[:len(line) - 1] + "'},"
            print("{key:", num , "value:", major)
            # scraped_text.append(line[:len(line) - 1])
            i += 1
    
# print(scraped_text)


# {key:'3', value:'Junior'},
#     {key:'4', value:'Senior'},