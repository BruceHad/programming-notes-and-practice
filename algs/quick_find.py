class QuickFind:
    id = []
    def __init__(self, n):
        self.n = n
        for i in range(n):
            self.id.append(i)
    def connected(self, p, q):
        return self.id[p] == self.id[q]
    def union(self, p, q):
        print self.id
        pid = self.id[p]
        qid = self.id[q]
        for i in range(len(self.id)):
            if(self.id[i] == pid): self.id[i] = qid


if __name__ == "__main__":
    x = QuickFind(3)
    print(x.id)
    print(x.connected(0,2))
    x.union(0, 2)
    print(x.id)
    print(x.connected(0,2))