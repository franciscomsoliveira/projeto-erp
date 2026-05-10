
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#ifdef _WIN32
    #include <conio.h>
    #include <windows.h>
#else
    #include <termios.h>
    #include <unistd.h>
    #include <fcntl.h>

    int kbhit(void) {
        struct termios oldt, newt;
        int ch;
        int oldf;
        tcgetattr(STDIN_FILENO, &oldt);
        newt = oldt;
        newt.c_lflag &= ~(ICANON | ECHO);
        tcsetattr(STDIN_FILENO, TCSANOW, &newt);
        oldf = fcntl(STDIN_FILENO, F_GETFL, 0);
        fcntl(STDIN_FILENO, F_SETFL, oldf | O_NONBLOCK);
        ch = getchar();
        tcsetattr(STDIN_FILENO, TCSANOW, &oldt);
        fcntl(STDIN_FILENO, F_SETFL, oldf);
        if(ch != EOF) {
            ungetc(ch, stdin);
            return 1;
        }
        return 0;
    }

    int getch(void) {
        struct termios oldt, newt;
        int ch;
        tcgetattr(STDIN_FILENO, &oldt);
        newt = oldt;
        newt.c_lflag &= ~(ICANON | ECHO);
        tcsetattr(STDIN_FILENO, TCSANOW, &newt);
        ch = getchar();
        tcsetattr(STDIN_FILENO, TCSANOW, &oldt);
        return ch;
    }
#endif

#define WIDTH 20
#define HEIGHT 10

char map[HEIGHT][WIDTH] = {
    "####################",
    "#......#...........#",
    "#.####.#.#########.#",
    "#.#...........#....#",
    "#.###########.#.####",
    "#.#...........#....#",
    "#.#####.#######.####",
    "#.#...........#....#",
    "#......#...........#",
    "####################"
};

int pacman_x = 1, pacman_y = 1;
int ghost_x = 18, ghost_y = 8;
int score = 0;
int total_pellets = 0;
int running = 1;

void setup() {
    srand(time(NULL));
    for (int i = 0; i < HEIGHT; i++) {
        for (int j = 0; j < WIDTH; j++) {
            if (map[i][j] == '.') total_pellets++;
        }
    }
}

void draw() {
    #ifdef _WIN32
        system("cls");
    #else
        printf("\033[H\033[J");
    #endif

    for (int i = 0; i < HEIGHT; i++) {
        for (int j = 0; j < WIDTH; j++) {
            if (i == pacman_y && j == pacman_x)
                printf("C"); 
            else if (i == ghost_y && j == ghost_x)
                printf("G"); 
            else
                printf("%c", map[i][j]);
        }
        printf("\n");
    }
    printf("Pontuacao: %d / %d\n", score, total_pellets);
    printf("Controlos: W (Cima), A (Esq), S (Baixo), D (Dir) | Q para sair\n");
}

int main() {
    setup();
    while (running) {
        draw();

        if (pacman_x == ghost_x && pacman_y == ghost_y) {
            printf("\nGAME OVER! O Fantasma apanhou-te!\n");
            break;
        }

        if (score == total_pellets) {
            printf("\nPARABENS! Comeste todas as pastilhas!\n");
            break;
        }

        if (kbhit()) {
            char input = getch();
            int nx = pacman_x, ny = pacman_y;
            if (input == 'q' || input == 'Q') break;
            if (input == 'w' || input == 'W') ny--;
            if (input == 's' || input == 'S') ny++;
            if (input == 'a' || input == 'A') nx--;
            if (input == 'd' || input == 'D') nx++;

            if (map[ny][nx] != '#') {
                pacman_x = nx;
                pacman_y = ny;
                if (map[pacman_y][pacman_x] == '.') {
                    map[pacman_y][pacman_x] = ' ';
                    score++;
                }
            }
        }

        // Movimento do Fantasma
        int gdir = rand() % 4;
        int gnx = ghost_x, gny = ghost_y;
        if (gdir == 0) gny--;
        else if (gdir == 1) gny++;
        else if (gdir == 2) gnx--;
        else if (gdir == 3) gnx++;

        if (map[gny][gnx] != '#') {
            ghost_x = gnx;
            ghost_y = gny;
        }
        
        #ifdef _WIN32
            Sleep(150);
        #else
            usleep(150000);
        #endif
    }
    return 0;
}
